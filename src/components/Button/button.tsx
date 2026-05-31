import { Center, Button } from '@chakra-ui/react'

interface IButton {
    text: string,
    children: () => void
}

export const MyButton = ({ text, children }: IButton) => {
    return (
        <Center>
            <Button onClick={children} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                {text}
            </Button>
        </Center>
    )
}
