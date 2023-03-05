import { VStack, Text, Pressable, HStack, Divider, Icon, useTheme, ScrollView } from "native-base";
import { Button } from "../components/Button";
import { HeaderSingInAndRegister } from "../components/HeaderSingInAndRegister";
import { Input } from "../components/Input";
import { LoginButtons } from "../components/LoginButtons";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export function Register() {
    const { navigate } = useNavigation()
 
    return (
        <VStack flex={1} px={8}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <HeaderSingInAndRegister title="Registrar" />

                <Input labelText="Email" placeHolder="Insira seu e-mail" />

                <Input labelText="Senha" placeHolder="Insira sua senha" />

                <Input labelText="Confirme sua senha" placeHolder="Digite sua senha novamente" />

                <HStack w="full" justifyContent="flex-end" mt={3}>
                    <Pressable onPress={ () => navigate('problems') }>
                        <Text color="red.500" fontFamily="medium" >
                            Esqueceu sua senha?
                        </Text>
                    </Pressable>
                </HStack>


                <HStack justifyContent="center" w="full">
                    <Button title="Continuar" mt={8} />
                </HStack>


                <HStack mt={6} justifyContent="center" alignItems="center">
                    <Divider my={2} color="gray.200" w={16} />
                    <Text mx={2}>
                        Ou Entre com
                    </Text>
                    <Divider my={2} color="gray.200" w={16} />
                </HStack>

                <LoginButtons />


                <HStack my={6} justifyContent="center">
                    <Text fontSize={14}>
                        Ja possui uma conta?
                    </Text>
                    <Pressable
                        _pressed={{
                            color: "red.200"
                        }}
                    >
                        <Text color="red.500" fontSize={14} marginLeft={2} onPress={ () => navigate('signin') }>
                            Faça Login
                        </Text>
                    </Pressable>
                </HStack>
            </ScrollView>
        </VStack>
    )
}