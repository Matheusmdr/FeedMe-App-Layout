import { useNavigation } from "@react-navigation/native";
import { VStack, Text, HStack, Divider, Pressable} from "native-base";
import { Button } from "../components/Button";
import { HeaderSingInAndRegister } from "../components/HeaderSingInAndRegister";
import { Input } from "../components/Input";
import { LoginButtons } from "../components/LoginButtons";

export function SignIn() {
    const { navigate } = useNavigation()

    return (
        <VStack flex={1} px={8}>
            <HeaderSingInAndRegister title="Login" subtitle="Olá! Prazer em vê-lo novamente." />

            <Input labelText="Email" placeHolder="Insira seu e-mail" />

            <Input labelText="Senha" placeHolder="Insira sua senha" />

            <HStack w="full" justifyContent="flex-end" mt={3}>
                <Pressable onPress={ () => navigate('problems') }>
                    <Text color="red.500" fontFamily="medium" >
                        Esqueceu sua senha?
                    </Text>
                </Pressable>
            </HStack>


            <HStack justifyContent="center" w="full">
                <Button title="Entrar" mt={8} />
            </HStack>


            <HStack mt={6} justifyContent="center" alignItems="center">
                <Divider my={2} color="gray.200" w={16} />
                <Text mx={2}>
                    Ou Entre com
                </Text>
                <Divider my={2} color="gray.200" w={16} />
            </HStack>

            <LoginButtons />


            <HStack mt={6} justifyContent="center">
                <Text fontSize={14}>
                    Não possui uma conta?
                </Text>
                <Pressable
                    _pressed={{
                        color: "red.200"
                    }}
                >
                    <Text color="red.500" fontSize={14} marginLeft={2} onPress={() => navigate("register")}>
                        Cadastre-se
                    </Text>
                </Pressable>
            </HStack>
        </VStack>
    )
}

