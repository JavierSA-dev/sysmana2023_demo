import { HomeDescriptionWrapper, Name, StyledParagraph } from "./HomeDescription.styled";

const HomeDescription = () => {
    return (
        <HomeDescriptionWrapper>
            <Name>Hi, Im Javier</Name>
            <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam
                libero, nec lacinia nisl nisl eget nisl. Sed tincidunt, nisl
            </StyledParagraph>
        </HomeDescriptionWrapper>
    );
}

export default HomeDescription;