  <template>
    <div style="font-family: Jost">
      <NavBar/>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourBlock/>
      <FiveBlock/>
    </div>
  </template>

  <script>
  import NavBar from "./components/NavBar";
  import FirstBlock from "./components/FirstBlock";
  import SecondBlock from "./components/SecondBlock";
  import ThirdBlock from "./components/ThirdBlock";
  import FourBlock from "./components/FourBlock";
  import FiveBlock from "./components/FiveBlock";
  export default {
    components: {FiveBlock, FourBlock, ThirdBlock, SecondBlock, FirstBlock, NavBar}
  }
  </script>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  </style>