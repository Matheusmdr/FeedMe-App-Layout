import { Button, HStack, Text, useTheme } from "native-base";
import { FontAwesome } from '@expo/vector-icons';


export function LoginButtons() {
    const { colors } = useTheme();

    return (
        <HStack mt={6} w="full" alignItems="center" justifyContent="center">
            <Button
                alignItems="center"
                width={32}
                leftIcon={<FontAwesome name="facebook" size={16} color={colors.blue[300]}/>}
                bg="white"
                borderWidth={1}
                borderColor={'gray.100'}
                rounded="lg"
                _pressed={{
                    bg: "warmGray.100"
                }}
                >
                <Text fontFamily="medium"  fontSize={14}>
                    Facebook
                </Text>
            </Button>
            <Button
                alignItems="center"
                marginLeft={2}
                width={32}
                leftIcon={<FontAwesome name="google" size={16} color={colors.red[300]} />}
                bg="white"
                borderWidth={1}
                borderColor={'gray.100'}
                rounded="lg"
                _pressed={{
                    bg: "warmGray.100"
                }}
                >
                <Text fontFamily="medium" fontSize={14}>
                    Google
                </Text>
            </Button>
        </HStack>
    )
}
