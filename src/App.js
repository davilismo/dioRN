import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/105023252?s=400&u=2e57e6b805def37cdafd6321860ea78e44344e3e&v=4';
const urlToMyGitHub = 'https://github.com/davilismo';

const colorDarkProgressGit = 'https://color-hex.org/colors/006d32.png';
const colorLightProgressGit = 'https://color-hex.org/colors/45c730.png';

const App = () => {
 
  const handlePressGoToGitHub = async () =>{
    console.log('Verificando Link');
    const res = await Linking.canOpenURL(urlToMyGitHub)
    if(res){
      console.log('Link aprovado');
      console.log('Abrindo Link...');
      await Linking.openURL(urlToMyGitHub);
    }
  };

  return (
    <SafeAreaView style = {style.container}>
    <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
      <View style = {style.content}>
        <Image
          accessibilityLabel='Eu de mascara e cabelo pintado'
          style = {style.avatar}
          source={{uri:imageProfileGitHub}}
        />
        <Text
          accessibilityLabel='Nome: Davi Lucas Santos'
          style = {[style.defaultText,style.name]}>
          Davi Lucas Santos
        </Text>
        <Text
          accessibilityLabel='Nickname: davilismo'
          style = {[style.defaultText,style.nickname]}>
          davilismo
        </Text>
        <Text 
          accessibilityLabel='Descrição: Cursando Analise e desenvolvimento de sistemas | Nordestino | @davilismo '
          style = {[style.defaultText,style.description]}>
          Cursando Análise e Desenvolvimento de Sistemas | 26 anos | Nordestino | @davilismo
        </Text>

        <View style = {style.content3} >

        <View style = {style.content2} >
            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />
            
          </View>

          <View style = {style.content2} >
            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
             accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

          </View>

          <View style = {style.content2}>

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

          </View>
     
          <View style = {style.content2} >

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress}
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress}
              source={{uri:colorLightProgressGit}}
            />
            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
             accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress}
              source={{uri:colorDarkProgressGit}}
            />
          </View>

            <View style = {style.content2} >
            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
               accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

          </View>

          <View style = {style.content2} >
            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='#'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

          </View>

        </View>

       <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText,style.textButton]}> Open in GitHub </Text>
          </View>
        </Pressable>

      </View>

    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container:{ 
    backgroundColor: colorGitHub,
    flex:1,
    justifyContent:'center',
  },
  content:{
    alignItems:'center',
    padding:20,
  },
  content2:{
    flexDirection:'row',
    padding:1,
  },
  content3:{
    padding:20,
  },
  avatar:{
    height:200,
    width:200,
    borderRadius:100,
    borderColor: 'white',
    borderWidth:2,
  },
  defaultText:{
    color:colorFontGitHub,
  },
  name:{
    marginTop:20,
    fontSize:24,
    fontWeight:'bold',
  },
  nickname:{
    fontSize:18,
    color: colorDarkFontGitHub,
  },
  description:{
    fontSize:14,
    fontWeight:'bold',
    marginBottom:6,
  },
  button:{
    marginTop:20,
    backgroundColor:colorDarkFontGitHub,
    borderRadius:10,
    padding:20,
  },
  textButton:{
    fontSize:16,
    fontWeight:'bold',
  },
  darkProgress:{
    height:10, 
    width:10, 
    borderRadius:2.5,
    marginLeft:2,
  },
  lightProgress:{
    height:15, 
    width:15, 
    borderRadius:5, 
  }
});