import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, VStack } from "native-base";
import { Button } from "../components/Button";
import { HeaderSingInAndRegister } from "../components/HeaderSingInAndRegister";
import { Input } from "../components/Input";

export function ProblemsToAuth() {
    const {navigate} = useNavigation()

    return (
        <VStack flex={1} px={8}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <HeaderSingInAndRegister title="Problemas para entrar?" subtitle="Insira seu nome de usuário, email ou telefone vinculado a sua conta e enviaremos um link para você voltar a acessar sua conta" />

                <Input labelText="" placeHolder="Telefone, nome de usuário ou email" />

                <VStack alignItems="center" w="full">
                    <Button title="Avançar" mt={8} onPress={() => navigate("redefinepassword")} />
                    <Text mt={8} color="red.500" fontFamily="medium" >
                    Precisa de mais ajuda?
                    </Text>
                </VStack>
            </ScrollView>
        </VStack>
    )
}