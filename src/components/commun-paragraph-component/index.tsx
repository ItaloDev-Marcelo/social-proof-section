interface CommunParagraphProps {
    Text: string,
    color?: string
}

const CommunParagraph = ({Text,color}:CommunParagraphProps) => {
    return  <p className={` font-medium ${color} `}> {Text} </p>
}

export default CommunParagraph