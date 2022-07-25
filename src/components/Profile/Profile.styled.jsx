import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  width: 700px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  background-color: rgba(8, 214, 242, 0.501);

  border: 2px;
  border-style: ridge;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 350px;
  height: auto;
  margin-top: 10px;
`;

export const TextName = styled.p`
  margin-top: 10px;
  font-size: 30px;
  line-height: 1.72;
  font-weight: 700;
`;
export const TextTag = styled.p`
  margin-top: 10px;
  font-size: 30px;
  line-height: 1.72;
  font-weight: 500;
  color: rgba(13, 13, 14, 0.29);
`;

export const TextLocation = styled.p`
  margin-top: 10px;
  font-size: 30px;
  line-height: 1.72;
  font-weight: 500;
  color: rgba(13, 13, 14, 0.29);
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;
export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;

  border: 3px;
  border-style: groove;

  box-sizing: border-box;
  width: 120px;
  height: 60px;

  background-color: antiquewhite;
`;
export const StatsLabel = styled.span`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;
  align-items: center;
`;
export const StatsQuantity = styled.span`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  font-weight: 700;
  align-items: center;
`;
