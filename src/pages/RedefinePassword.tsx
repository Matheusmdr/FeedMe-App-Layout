import { useNavigation } from "@react-navigation/native";
import { VStack, Text, HStack, Divider, Pressable} from "native-base";
import { Button } from "../components/Button";
import { HeaderSingInAndRegister } from "../components/HeaderSingInAndRegister";
import { Input } from "../components/Input";
import { LoginButtons } from "../components/LoginButtons";

export function RedefinePassword() {
    const { navigate } = useNavigation()

    return (
        <VStack flex={1} px={8}>
            <HeaderSingInAndRegister title="Redefinir senha" subtitle="" />

            <Input labelText="Nova senha" placeHolder="Insira sua senha" />

            <Input labelText="Confirme a nova senha" placeHolder="Insira sua senha novamente" />

            <HStack justifyContent="center" w="full">
                <Button title="Continuar" mt={8} />
            </HStack>
        </VStack>
    )
}

