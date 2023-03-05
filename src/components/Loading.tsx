import { Spinner, Center } from "native-base";

export function Loading(){
    return(
        <Center
            flex={1}
            bgColor="red.500"
        >
            <Spinner 
                color="white"/>
        </Center>
    )
}