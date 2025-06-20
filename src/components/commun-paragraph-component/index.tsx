interface CommunParagraphProps {
    Text: string,
    color?: string
}

const CommunParagraph = ({Text,color}:CommunParagraphProps) => {
    return  <p className={color}> {Text} </p>
}

export default CommunParagraph