import { FC, useState } from 'react';
import { fetchLeads } from '@/api/api-clients';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGlobalStore } from '@store';
import { Button } from './components/ui/button';

export const App: FC = () => {
  const [isLoadig, setIsLoading] = useState(false);
  const { leads, setLeads } = useGlobalStore();

  // const subdomain = 'denisp9831'; // Поддомен нужного аккаунта
  // const url = `https://thingproxy.freeboard.io/fetch/https://${subdomain}.amocrm.ru/oauth2/access_token`; // Формируем URL для запроса
  // //  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwYTIwNWVjYzQ4MGYwMzljNmI5NjVkNTg3N2I2ZTRlOWUwYmIwYzgyNDdkZWFkNGJjZDlhODkyMDM0YjJiODczMWVlMDRhM2NjMzFjN2MwIn0.eyJhdWQiOiJkYjExMjhlYi04OTFjLTQwODgtOWFhZS1mN2M0ZWUxMzJiNmMiLCJqdGkiOiJkMGEyMDVlY2M0ODBmMDM5YzZiOTY1ZDU4NzdiNmU0ZTllMGJiMGM4MjQ3ZGVhZDRiY2Q5YTg5MjAzNGIyYjg3MzFlZTA0YTNjYzMxYzdjMCIsImlhdCI6MTcyNTkzMTU0MSwibmJmIjoxNzI1OTMxNTQxLCJleHAiOjE3MjYwMTc5NDEsInN1YiI6IjExNDkyNTgyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5OTQyLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZDYxZGY5NDMtMjY3ZC00YjNkLWFiZjAtMzM1NDllYzc4MmU1IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.I1SBPspecSeYyMwJuMJ-oU0T2Ntm7LXpVVpkt_xgXNoHccPjBxlozMa5i1qVcc5C1ZspZk2AiRu6BazkLoe7M9-lrPMoOA1TxBQrwSzkRlqNlLLOBk7hS4sUj345sYnH-DEscueJnLxTzvRYwGfNYYNZY8O3iQgPqZkbJfw5pQD8MfUqt8nusmku8GXXH371TluUDWnvCNR-_hjJCZ9Ol0bnWIjwkeef58vN94J4e214bauwELCV3d-wtyqCtAsIbNFqNpTbnayfX7cxOduAB4JhUm0iDMchZ4cpDyDRm-xsEs43ewkYB4PT_rx4eV7K6Euzy_mEzgI-9FuDbP6iSg",
  // //     "refresh_token": "def5020041273b4d5afbb816b755f9712722e15cb4518391be4e6202a79aa2037ab069d69b7073e3b94ef743a757054488a553a3d1115130c550b44d56bb240a2e37b83b2334ec5a89c8bbbafdd8fa5529398f94bb65f9aeb330ed4f0376a59783954fbe5852fbbd10ed05313f0810b291dcf7bfb4fa27aae28f95ae6a6cbcf84d7c57ebc647b3b4b0b318ed87e56b0ca56ecd203317cbb1cbd9e518421320c752e109a89deb3afd763acc547d505de4e4541236115aedfbf04ce7fd6e2ba0b9989c803ab71db4db809fc7bd09bb71ebc7cc141331c3bbd6190e9beb737cb54c028f834223d62c5901f6920428eefafb5be7bed4e8c1d6f72ce1e28877918f3d479994048a3ee77c72c1aec9b61f111e26d9d2d8bed2d0a320ced5c14d34f6bcdf6a3c79522a11160fbff642bd61c00d30b53e0763e71d1942c2bb53ff96661a2f9dc907d9e0db3c1a78157c55c1d834b100715c2d902fd5e0f7f55fb39440c49d81b7adfb2f86487308c75851e4581f9a06bb3acf1a7df6e1484d245c12cdccfba79bbf927f737d48020f09ad2ee45981306663307e43aec510740250350960db886e38b627b34e07ce8699461b92e68a99d2c40de5b3e3b51fdcf6cc1954518de9ffb676244f024a90f224459f9a613e5a17da2f1ac3fe52d715e466f88554600dfc12039656e7ab544fcecc07"
  // //   // Соберем данные для запроса
  // const data = {
  //   client_id: 'db1128eb-891c-4088-9aae-f7c4ee132b6c',
  //   client_secret: 'CIBG0T9koeDLTw5Bs4cZ7EnJBJzniDoTJ6iAaTaCvY173gJLqyGRvf0ZrFkn8SgA',
  //   grant_type: 'authorization_code',
  //   code: 'def502003e009fbf586a6d3ee7ce7fa681393475736cf0bf8a176e8737b55ce13136d9151780980057059d25c897c89c282e97540844d1e6285d23dd0a51272a8c24d3fcda957f1e52ba0d233a072e119d52277214252f69dd46159ca86dd3030a755c87e07d7a7bc80337ff66823fe01826919ac79d8bc0af6d604826be4e7d9aa4e23e2bbf90226b2e73b872838ad5d24d328c3d622db80df9595017394459c047ab599d8ac5776944313511e4cb238b0fd32c74ff6d6009ab411bd8ce6fde2867fb9a208dcc288c473923f4476db6650792394466dfb0548bffe55907b009a449e76ae08b306b352b22e1ec727a8c889555e667735ae7909fb849b74ae4113bdef0ef0fe8ac1a75027a121a22c6f0154958a810111910b3964c854d54416cf52e931c714308011318a7aaf1fa95876b8d804fe8fd617abc68fd15cfe4cf7a06cae69c8e0295f988e1746cd11a6d5abf203c4c2ae491957da10910e2cdfa112b481129806fc49ea7ea4bdec6ed44567425c55de5decebe7c64894b4e7689c3304317cc51d69b03cbb5b63fa80327bdc0a0f3ed763c1b09c1e4fd4d4ecbef2d8a8c64be8395a1ca6f798758b0ef3a99a18c4a8edc0fc541dbb56ef9a0c0894dd635db266ff92e32cd06f2e266c1fd1844f908d6dc4c2094967b8ed9c7f825fa7d53cc614675417a460a970735053aed4051fc185fa93259775e728f',
  //   redirect_uri: 'https://pushkindenis.github.io/emfy-test/',
  // };
  // //localhost:5173/emfy-test/

  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     // 'User-Agent': 'amoCRM-oAuth-client/1.0',
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       const errors = {
  //         400: 'Bad request',
  //         401: 'Unauthorized',
  //         403: 'Forbidden',
  //         404: 'Not found',
  //         500: 'Internal server error',
  //         502: 'Bad gateway',
  //         503: 'Service unavailable',
  //       };
  //       throw new Error(errors[response.status] || 'Undefined error');
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     const { access_token, refresh_token, token_type, expires_in } = data;
  //     console.log('Access Token:', access_token);
  //     console.log('Refresh Token:', refresh_token);
  //     console.log('Token Type:', token_type);
  //     console.log('Expires In:', expires_in);
  //   })
  //   .catch((error) => {
  //     console.error('Ошибка:', error.message);
  //   });

  // const subdomain = 'denisp9831'; // Ваш поддомен
  // const url = `https://cors-anywhere.herokuapp.com/https://${subdomain}.amocrm.ru/api/v4/leads`; // Пример запроса к контактам

  // fetch(url, {
  //   method: 'GET', // Это пример GET-запроса
  //   headers: {
  //     Authorization: `Bearer ${ACCESS_TOKEN}`,
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log('Response data:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Ошибка:', error.message);
  //   });
  const handleFetchLeads = async () => {
    try {
      setIsLoading(true);
      const leads = await fetchLeads().then((result) => result._embedded.leads[0]);
      setLeads(leads);
    } catch (error) {
      console.error('Failed fetch login', error);
    } finally {
      setIsLoading(false);
      console.log(leads);
      console.log(isLoadig);
    }
  };

  // fetchLeads();

  return (
    <>
      <Button onClick={handleFetchLeads}>{'Fetcn lids!'}</Button>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">{leads ? `${leads.id}` : 'gpo'}</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
