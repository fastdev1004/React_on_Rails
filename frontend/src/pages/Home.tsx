import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react'
import { Header, Footer } from 'components'

const Home = () => {
  return (
    <Grid
      templateAreas={`"header header"
                      "main main"
                      "footer footer"`}
      gridTemplateRows={'50px 1fr 50px'}
      gridTemplateColumns={'150px 1fr'}
      h='660px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl='4' bg='green.300' area={'main'}>
        <Outlet/>
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Home;
