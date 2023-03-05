import { Box, HStack, Image, VStack, Text } from "native-base";


interface IHeaderSignInAndRegister {
    title: string
    subtitle?: string
}

export function HeaderSingInAndRegister({ title, subtitle }: IHeaderSignInAndRegister) {
    return (
        <Box>
            <HStack
                alignContent="center"
                justifyContent="center"
                alignItems="flex-end"
                mt={16}
            >
                <Image
                    source={require('../assets/logo.png')}
                    size="xl"
                />
            </HStack>

            <VStack>
                <Text fontFamily="medium" fontSize={24} color="black" mb={2}>
                    {title}
                </Text>
                {subtitle &&
                <Text color="gray.300" fontSize={12}>
                    {subtitle}
                </Text>
                }
            </VStack>
        </Box>
    )
}