import AppleIcon from '../../../public/apple.svg'
import AppleLoginWrapper from "../AppleloginWrapper/AppleLoginWrapper.tsx";
const Loginwithapple = () => {
  const successResponseApple = ({ idToken }: { idToken: string }) => {
    console.log(idToken)
  }
  const failureResponseApple = ({ error }: { error?: string }) => {
    console.log(error)
  }
  return (
    <AppleLoginWrapper
      onSuccess={successResponseApple}
      onFailure={failureResponseApple}
      renderedChildren={ (childrenProps:any) => (
        <img
          alt={'Apple icon'}
          src={AppleIcon}
          onClick={() => {
            childrenProps.onClick()
          }}
          height={48}
          width={48}
        />

      )}/>
  )
}

export default Loginwithapple