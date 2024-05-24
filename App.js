import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Exemplo de telas
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
        source={require('./assets/images/WhatsApp Image 2023-06-02 at 17.36.21.jpeg')}
        style={styles.image}
      />
      <Text style={styles.text}>Beatriz Sousa</Text>
      <Text style={styles.desc}>Futura Analista de Sistemas</Text>
      <Text style={styles.desc}>Idade: 19 anos</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        <Text style={styles.text}>Projetos</Text>
        <Image source={require('./assets/images/bol.jpg')} style={styles.photo}/>
        <Text style={styles.pro}>TicketBol tem como objetivo vender ingressos para jogos de futebol.{"\n"}</Text>

        <Image source={require('./assets/images/busca.jpg')} style={styles.photo}/>
        <Text style={styles.pro}>BuscaPata foi criado através de um desafio do Hacker Cidadão.{"\n"}</Text>

        <Image source={require('./assets/images/call.jpg')} style={styles.photo}/>
        <Text style={styles.pro}>CallmAI foi o primeiro projeto de residência do Porto Digital.{"\n"}</Text>

        <Image source={require('./assets/images/comunidade.jpg')} style={styles.photo}/>
        <Text style={styles.pro}>Este projeto tem como objetivo educar as pessoas em relação à saúde mental.{"\n"}</Text>

        <Image source={require('./assets/images/GUAIAMU.jpg')} style={styles.photo}/>
        <Text style={styles.pro}>Projeto feito durante o Startup Way pelo Sebrae e Senac.{"\n"}</Text>

        <Image source={require('./assets/images/mind.jpg')} style={styles.photo}/>
        <Text style={styles.pro}>MindCalm foi desenvolvido para trabalhadores de uma refinaria.{"\n"}</Text>

        <Image source={require('./assets/images/smart.jpg')} style={styles.photo}/>
        <Text style={styles.pro}>Um app de automação feito para controlar a sua casa pelo celular.{"\n"}</Text>
      </View>
    </ScrollView>
  );
}

function SkillsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        <Text style={styles.text}>Habilidades Técnicas</Text>
        <Text style={styles.skill}>• Programação em JavaScript</Text>
        <Text style={styles.skill}>• Desenvolvimento de Aplicativos Móveis</Text>
        <Text style={styles.skill}>• React e React Native</Text>
        <Text style={styles.skill}>• Banco de Dados SQL e MongoDB</Text>
        <Text style={styles.skill}>• Metodologias Ágeis (Scrum, Kanban)</Text>
        <Text style={styles.skill}>• Controle de Versão com Git</Text>
        <Text style={styles.skill}>• Desenvolvimento Backend com Node.js</Text>
        <Text style={styles.skill}>• Desenvolvimento Backend com .NET</Text>
        <Text style={styles.skill}>• Desenvolvimento Backend com Ruby{"\n"}</Text>

        <Text style={styles.text}>Habilidades Comportamentais</Text>
        <Text style={styles.skill}>• Comunicação</Text>
        <Text style={styles.skill}>• Inteligência Emocional</Text>
        <Text style={styles.skill}>• Adaptabilidade</Text>
        <Text style={styles.skill}>• Trabalho em Equipe</Text>
        <Text style={styles.skill}>• Pontualidade</Text>
        <Text style={styles.skill}>• Gestão de Tempo</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 24, 
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
  }, 
  desc:{
    fontSize: 20,
  },
  image:{
    width: 200,
    height: 350,
    borderRadius: 70,
  }, 
  photo:{
    width: 330,
    height: 190,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 16,
  }, 
  pro:{
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  skill:{
    fontSize: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    textAlign: 'left',
  },
  scrollViewContent:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Projetos') {
            iconName = focused ? 'desktop' : 'desktop-outline';
          } else if (route.name === 'Habilidades') {
            iconName = focused ? 'school' : 'school-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Projetos" component={SettingsScreen} />
      <Tab.Screen name="Habilidades" component={SkillsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
