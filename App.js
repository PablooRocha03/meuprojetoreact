import React from "react";
import { StyleSheet, Text, ScrollView, Image, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/Perfil-Pablo.jpg")} style={styles.image} />
      <Text style={styles.header}>Pablo Rocha</Text>
      <Text style={styles.subheader}>Análise e desenvolvimento de Sistemas</Text>
      <Text style={styles.subheader}>Objetivo</Text>
      <Text style={styles.paragraph}>
        Meu objetivo é me destacar na área de desenvolvimento de software, com
        foco em tecnologias modernas e melhores práticas de engenharia de software.
        Estou empenhado em aprimorar minhas habilidades técnicas e colaborar com equipes
        dinâmicas para criar soluções inovadoras que impactem positivamente a vida das pessoas.
      </Text>
      <Text style={styles.subheader}>Habilidades</Text>
      <Text style={styles.listItem}>• Soft Skills: Liderança, Resolução de Problemas, Colaboração.</Text>
      <Text style={styles.listItem}>• Hard Skills: HTML5, CSS3, JavaScript, React Native, Node.js, SQL, Git.</Text>
      <Text style={styles.paragraph}>

 conhecer um pouco mais do meu trabalho em {" "}
 
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/PablooRocha03")}
        >
         https://github.com/PablooRocha03
        </Text>.
      </Text>
    </ScrollView>
  );
}

function BootcampsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>Bootcamp Full Stack Developer | CódigoXP | Janeiro 2024 - Março 2024</Text>
      <Text style={styles.paragraph}>
        • Tecnologias: HTML, CSS, JavaScript, React, Node.js
        • Projetos: Desenvolvimento de uma aplicação completa com front-end e back-end integrados.
      </Text>
      <Text style={styles.subheader}>Bootcamp Data Science | DataExpert | Setembro 2023 - Novembro 2023</Text>
      <Text style={styles.paragraph}>
        • Tecnologias: Python, Pandas, NumPy, Scikit-Learn, Matplotlib
        • Projetos: Análise de dados, criação de modelos preditivos e visualização de dados.
      </Text>
      <Text style={styles.subheader}>Bootcamp Mobile Development | MobileHub | Junho 2023 - Agosto 2023</Text>
      <Text style={styles.paragraph}>
        • Tecnologias: React Native, Expo, SQLite
        • Projetos: Desenvolvimento de aplicativos móveis multiplataforma com integração de banco de dados local.
      </Text>
      <Text style={styles.subheader}>Bootcamp DevOps | CloudMasters | Março 2023 - Maio 2023</Text>
      <Text style={styles.paragraph}>
        • Tecnologias: Docker, Kubernetes, AWS, Terraform
        • Projetos: Implementação de pipelines CI/CD, automação de infraestrutura e monitoramento de sistemas.
      </Text>
      <Text style={styles.subheader}>Bootcamp Cybersecurity | SecureTech | Dezembro 2022 - Fevereiro 2023</Text>
      <Text style={styles.paragraph}>
        • Tecnologias: Network Security, Ethical Hacking, Penetration Testing, Security Information and Event Management (SIEM)
        • Projetos: Simulação de ataques e defesas cibernéticas, análise de vulnerabilidades e implementação de medidas de segurança.
      </Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>Análise e desenvolvimento de Sistemas</Text>
      <Text style={styles.paragraph}>Faculdade Senac Pernambuco | Início: Março 2023 - Atual</Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "account" : "account-outline";
            } else if (route.name === "Bootcamps") {
              iconName = focused ? "laptop" : "laptop-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <MaterialCommunityIcons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: "#d3d3d3", // cinza claro
          },
          headerTintColor: "#000",
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Bootcamps" component={BootcampsScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#000",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#d3d3d3", // cinza claro
    alignSelf: "center",
    marginBottom: 20,
  },
});
