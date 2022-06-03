import {Query} from 'appwrite';
import React from 'react';

import {
  HStack,
  VStack,
  Heading,
  Box,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react';

import {
  TextField,
} from '~/forms/field';

import {
  useSession,
  useApi,
} from '~/providers/hooks';

const MSG_ID = '629a1c77e7581b2f7087';

const Component = (_props) => {
  const {setSession} = useSession();
  let [user, setUser] = React.useState<string>(null);
  let [messages, setMessages] = React.useState([]);
  let [pendingMessage, setPendingMessage] = React.useState('');
  let api = useApi();

  const getUser = async () => {
    try {
      let user = await api.account.get();
  
      setUser(user.name);
    } catch (_) {
      setSession(null);
    }
  }

  const sendMessage = async () => {
    if(pendingMessage.length == 0 || pendingMessage == '') return;

    const message = pendingMessage;

    setPendingMessage('');

    await api.database.createDocument(MSG_ID, 'unique()', {
      user,
      message,
      created: new Date().toISOString(),
    });
  }

  api.subscribe(`collections.${MSG_ID}.documents`, _res => {
    getMessages();
  }); // messages

  
  const getMessages = async () => {
    const list = await api.database.listDocuments(MSG_ID);

    setMessages(
      list.documents
      .map(doc => {
        return {name: doc['user'], message: doc['message']}
      })
    );
  }

  const effect = async () => {
    await getUser();
    await getMessages();
  }

  React.useEffect(() => {
    effect();
  }, []);

  if(user == null) {
    return (
      <HStack w='full' h='full'>
        <VStack w='full' h='full'>
          <Heading>Loading...</Heading>
        </VStack>
      </HStack>
    );
  }

  return (
    <HStack w='full' h='full' align='flex-start' bg='gray.200'>
      <VStack h='full' bg='white' align='flex-start' flex={1}>
        <Heading w='full' as='h1' size='sm' bg='gray.200' px={10} py={2}>
          Topic
        </Heading>

        <Box w='full' flex={1} overflowX='hidden' overflowY='auto'>
          <TableContainer>
            <Table variant='striped' colorScheme='gray'>
              <Tbody>
              {
                messages.map((m, i) => (
                  <Tr key={`chat_${i}`}>
                  <Td>{m.name}: </Td>
                  <Td width='100%'>{m.message}</Td>
                </Tr>  
                ))
              }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <HStack as="form" w='full' px={10} py={4} bg='gray.100' action="#" onSubmit={(e) => {
            e.preventDefault();

            sendMessage();
          }}>
          <TextField 
            id='chat-text' 
            placeholder='Message everyone...'
            value={pendingMessage}
            onChange={e => setPendingMessage(e.target.value)}
          />
          <Button type='submit'>Send</Button>
        </HStack>
      </VStack>
    </HStack>
  );
}

export default Component;