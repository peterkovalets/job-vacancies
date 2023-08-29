import { useState } from 'react';
import { styled } from 'styled-components';
import LinkButton from './LinkButton';

const StyledText = styled.p`
  display: inline;
  margin-right: 0.6rem;
`;

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = 'Показать больше',
  collapseButtonText = 'Показать меньше',
  expanded = false,
  ...props
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const words = children.split(' ');

  if (words.length <= collapsedNumWords) return <p>{children}</p>;

  return (
    <div {...props}>
      <StyledText>
        {isExpanded
          ? children
          : `${words.slice(0, collapsedNumWords).join(' ')}...`}
      </StyledText>
      <LinkButton as="button" onClick={() => setIsExpanded((is) => !is)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </LinkButton>
    </div>
  );
}

export default TextExpander;
