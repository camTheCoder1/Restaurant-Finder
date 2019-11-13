import styled from 'styled-components'

const BannerStyle = styled.div`
color: blue;
display: flex;
justify-content: space-between;
align-items: center;
background: grey;
max-width: 100vw;
height: 60px;
padding: 10px;
p {
  font-family: 'Helvetica', cursive;
  font-size: 2rem;
  margin: 1.75rem;
}
@media (max-width: 50em) {
  .rest {
  display: none;
    }
}
`
export default BannerStyle