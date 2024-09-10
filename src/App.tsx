import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ACCESS_TOKEN } from '@constants';

export const App: FC = () => {
  //   const subdomain = 'denisp9831'; // Поддомен нужного аккаунта
  //   const url = `https://cors-anywhere.herokuapp.com/https://${subdomain}.amocrm.ru/oauth2/access_token`; // Формируем URL для запроса
  // //  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwYTIwNWVjYzQ4MGYwMzljNmI5NjVkNTg3N2I2ZTRlOWUwYmIwYzgyNDdkZWFkNGJjZDlhODkyMDM0YjJiODczMWVlMDRhM2NjMzFjN2MwIn0.eyJhdWQiOiJkYjExMjhlYi04OTFjLTQwODgtOWFhZS1mN2M0ZWUxMzJiNmMiLCJqdGkiOiJkMGEyMDVlY2M0ODBmMDM5YzZiOTY1ZDU4NzdiNmU0ZTllMGJiMGM4MjQ3ZGVhZDRiY2Q5YTg5MjAzNGIyYjg3MzFlZTA0YTNjYzMxYzdjMCIsImlhdCI6MTcyNTkzMTU0MSwibmJmIjoxNzI1OTMxNTQxLCJleHAiOjE3MjYwMTc5NDEsInN1YiI6IjExNDkyNTgyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5OTQyLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZDYxZGY5NDMtMjY3ZC00YjNkLWFiZjAtMzM1NDllYzc4MmU1IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.I1SBPspecSeYyMwJuMJ-oU0T2Ntm7LXpVVpkt_xgXNoHccPjBxlozMa5i1qVcc5C1ZspZk2AiRu6BazkLoe7M9-lrPMoOA1TxBQrwSzkRlqNlLLOBk7hS4sUj345sYnH-DEscueJnLxTzvRYwGfNYYNZY8O3iQgPqZkbJfw5pQD8MfUqt8nusmku8GXXH371TluUDWnvCNR-_hjJCZ9Ol0bnWIjwkeef58vN94J4e214bauwELCV3d-wtyqCtAsIbNFqNpTbnayfX7cxOduAB4JhUm0iDMchZ4cpDyDRm-xsEs43ewkYB4PT_rx4eV7K6Euzy_mEzgI-9FuDbP6iSg",
  // //     "refresh_token": "def5020041273b4d5afbb816b755f9712722e15cb4518391be4e6202a79aa2037ab069d69b7073e3b94ef743a757054488a553a3d1115130c550b44d56bb240a2e37b83b2334ec5a89c8bbbafdd8fa5529398f94bb65f9aeb330ed4f0376a59783954fbe5852fbbd10ed05313f0810b291dcf7bfb4fa27aae28f95ae6a6cbcf84d7c57ebc647b3b4b0b318ed87e56b0ca56ecd203317cbb1cbd9e518421320c752e109a89deb3afd763acc547d505de4e4541236115aedfbf04ce7fd6e2ba0b9989c803ab71db4db809fc7bd09bb71ebc7cc141331c3bbd6190e9beb737cb54c028f834223d62c5901f6920428eefafb5be7bed4e8c1d6f72ce1e28877918f3d479994048a3ee77c72c1aec9b61f111e26d9d2d8bed2d0a320ced5c14d34f6bcdf6a3c79522a11160fbff642bd61c00d30b53e0763e71d1942c2bb53ff96661a2f9dc907d9e0db3c1a78157c55c1d834b100715c2d902fd5e0f7f55fb39440c49d81b7adfb2f86487308c75851e4581f9a06bb3acf1a7df6e1484d245c12cdccfba79bbf927f737d48020f09ad2ee45981306663307e43aec510740250350960db886e38b627b34e07ce8699461b92e68a99d2c40de5b3e3b51fdcf6cc1954518de9ffb676244f024a90f224459f9a613e5a17da2f1ac3fe52d715e466f88554600dfc12039656e7ab544fcecc07"
  // //   // Соберем данные для запроса
  //   const data = {
  //     client_id: 'db1128eb-891c-4088-9aae-f7c4ee132b6c',
  //     client_secret: '0O5zClwuPjgIf9zi1ID13qUtth7w0QerxLWWyAmBV97z3oOQ9XtrjLDhw8QEOXwo',
  //     grant_type: 'authorization_code',
  //     code: 'def502001b42b17a0f1e3ca39573d907c72220a4169f8aa09973b6855a8b14f0f6b9b051213ad4f06a6d28dff0080a8e5df411cf1eb746567e0988dbe883aa6af8e363e7e635ae471aa0a87c8eb62072090904b8dcc36c6e5d5330633161df1b83bcb3fc9b8f0a58c7b7b6992e3738a49d75a658e383f5c1d863a357c5720d51be7611a3e2d2a58173bf9241b6727fa9dafe593ece3ecbe3623f3c403729ef6f5e3246073abea76dca02d27865832e96a3290715d8c2ed93503ee92ffb031609ba2636f2228bcfcab460268c8c587d543847ba8ef0a386fcefd2df8d3da99e5d51ba43e43ed6374c7583290cd35e925c781b7325efb589013b635d7a40f11d817275138d4c3bfb380f2c9814c101abdc5f4d64b165dd1265724dcc9a5e360bd91dd48ded929cd4ae22337874f1f83b0cadd12ea81f7b13a6c1e5b10ef922417b4ebc237d774accf1731b9593472efb08c2a1a792a6c8152761bf263013b19d964871a0ecb8c3a49db6c005037d7a89ea5e452cee787a444af01fd8ef3005dea3b64a8133484446420bbcc3a4c7867bbbda7d4b3180164e0ed71c09f6790a9c8690a4b2f31f0e4c7ae1b1885be8b2ef007f00ff4be5cf888ecea4b7caa808aea0630b07e5548df04519648154853d99f88f6c708045f9bf1c6fb9ea925f56000e53d23ac5d4679fcf5f09f3b754b772424a97e613d5f4f73a2c644587',
  //     redirect_uri: 'https://pushkindenis.github.io/emfy-test/',
  //   };
  //   //localhost:5173/emfy-test/

  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'User-Agent': 'amoCRM-oAuth-client/1.0',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         const errors = {
  //           400: 'Bad request',
  //           401: 'Unauthorized',
  //           403: 'Forbidden',
  //           404: 'Not found',
  //           500: 'Internal server error',
  //           502: 'Bad gateway',
  //           503: 'Service unavailable',
  //         };
  //         throw new Error(errors[response.status] || 'Undefined error');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const { access_token, refresh_token, token_type, expires_in } = data;
  //       console.log('Access Token:', access_token);
  //       console.log('Refresh Token:', refresh_token);
  //       console.log('Token Type:', token_type);
  //       console.log('Expires In:', expires_in);
  //     })
  //     .catch((error) => {
  //       console.error('Ошибка:', error.message);
  //     });

  const subdomain = 'denisp9831'; // Ваш поддомен
  const url = `https://cors-anywhere.herokuapp.com/https://${subdomain}.amocrm.ru/api/v4/leads`; // Пример запроса к контактам

  fetch(url, {
    method: 'GET', // Это пример GET-запроса
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Response data:', data);
    })
    .catch((error) => {
      console.error('Ошибка:', error.message);
    });

  return (
    <>
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
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
