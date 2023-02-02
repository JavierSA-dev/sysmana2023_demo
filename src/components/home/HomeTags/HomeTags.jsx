import { HomeTagsWrapper, TagsContainer, Tag } from "./HomeTags.styled";

const TAGS = ['React', 'Next.js', 'Styled Components', 'JavaScript', 'HTML', 'CSS', 'JQuery', 'Tailwind CSS', 'Boostrap', 'PHP']

const HomeTags = () => {

    return (
        <HomeTagsWrapper>
            <TagsContainer>
                {TAGS.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </TagsContainer>
        </HomeTagsWrapper>
    )
}


export default HomeTags;