<template>
  <div>
    <Header></Header>
    <main>
      <nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,Footer
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

main{
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

img{
  width: 100%;
}

a{
  text-decoration: none;
}
li{
  list-style: none;
}

.header{
  background-color: #343a40;

  &-inner{
    display: flex;
    align-items: center;
    padding: 10px 40px;

    @media screen and (max-width: 768px) {
      padding: 10px 20px;
    }

    .header-title{
      margin-right: auto;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }

      a{
        color: #fff;
        font-family: 'Crimson Text', serif;
        letter-spacing: 0.05em;
      }
    }

    .header-link{
      cursor: pointer;
      color: rgba(255,255,255,.5);

      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
}

.footer{
  background-color: #3c3c3c;
  padding: 10px 0;

  p{
    text-align: center;
    color: rgba(255,255,255,.5);

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }    
  }
}

.button{
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
    background: linear-gradient(135deg,#c00,#ec64a9);
    padding: 12px 8px;
    display: block;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    transition: 0.2s;

    @media screen and (max-width: 768px) {
        padding: 6px 4px;
        font-size: 15px;
    }

    &:hover{
        border-radius: 48px;
        overflow: hidden;
        opacity: 0.75;
    }
}

.auth{
  background-image: url(/images/auth-bg.jpg);
  background-size: 100% auto;
  background-size: cover;
  background-repeat: none; 
  padding-top: 100px; 
  height: 100vh;

  &-container{
    width: 100%;
    max-width: 820px;
    margin: 0 auto;
    padding: 50px 2%;
    background-color: rgba(255,255,255,0.9);

    @media screen and (max-width: 1000px) {
        max-width: auto;
        width: 90%;
    }    
    
    .auth-title{
      margin-bottom: 20px;
      text-align: center;
      letter-spacing: 0.05em;
      color: #636363;

      @media screen and (max-width: 768px) {
        font-size: 26px;
      }
    }

    .auth-text{
      margin-bottom: 20px;
      text-align: center;
      font-size: 20px;

      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    .auth-row{
      margin-bottom: 20px;

      &:nth-of-type(2){
        margin-bottom: 30px;
      }

      label{
        display: block;
        text-align: center;
        margin-bottom: 10px;

        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }

      input{
        display: block;
        width: 40%;
        margin: 0 auto;
        padding: 8px 0 8px 5px;

        @media screen and (max-width: 768px) {
          width: 60%;
        }
      }
    }

    .button{
      width: 40%;
      margin-top: 10px;
      font-size: 20px;
      border-radius: 48px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
        width: 60%;
      }
    }

    .auth-link{
      margin-top: 40px;
      margin-left: auto;
      text-align: right;

      @media screen and (max-width: 768px) {
          font-size: 12px;
        }

      span{
        display: block;
      }

      a{
        color: #c00;

        &:hover{
          opacity: 0.75;
        }
      }
    }
  }
}
</style>
