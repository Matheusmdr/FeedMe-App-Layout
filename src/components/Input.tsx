import { VStack, Input as NativeBaseInput, Text} from "native-base"

interface iInput{
    labelText?: string
    placeHolder: string
}


export function Input({ labelText = "", placeHolder}: iInput) {

    return (
        <VStack mt={5}>
            {labelText.length > 0 &&  <Text mb={2} fontFamily="medium">{labelText}</Text>}
            <NativeBaseInput borderColor="gray.200" _focus={{bg: "warmGray.100" , borderColor: "gray.100"}}
                placeholder={placeHolder} 
                _input={{
                    alignItems: "center"
                }}
                alignItems="center"
            />
        </VStack>
    )
}