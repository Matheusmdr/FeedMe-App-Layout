import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <ButtonNativeBase
            w="64"
            h={10}
            rounded="lg"
            font-size="md"
            textTransform="uppercase"
            bg={'red.500'}
            _pressed={{
                bg: 'red.600'
            }}

            _loading={{
                _spinner: {color: 'white' }
            }}
            {...rest}
        >
            <Text
                fontSize="sm"
                fontFamily="heading"
                color={'white'}
            >
                {title}
            </Text>
        </ButtonNativeBase>
    )
}