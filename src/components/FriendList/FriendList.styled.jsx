import styled from "@emotion/styled";


export const FriendListUl = styled.ul`
 margin-top: 10px;
  padding: 0;
  list-style: none;
`
export const FriendListItem = styled.li`
  width: 650px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  background-color: rgba(13, 209, 235, 0.6);

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;

  display: flex;
  align-items: center;
  box-sizing: content-box;

  border: 1px;
  border-style: inset;
`
export const Chip = styled.span`

  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;

  background-color: ${ props => {
console.log(props.isOnline);
    switch (props.isOnline) {
        case true: return 'green';
        default: return 'red'
}
  }}
`

export const Avatar = styled.img`
  width: 150px;
 }`
export const FriendName = styled.p`
  font-weight: 500;
  font-size: 35px;
  margin-left: 10px;
  `