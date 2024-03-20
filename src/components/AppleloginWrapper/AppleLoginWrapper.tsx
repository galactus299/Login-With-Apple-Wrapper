import {ReactElement} from 'react'
import AppleLogin from "react-apple-login"

export type AppleSuccessResponse = {
    authorization: {
        state: string
        code: number
        id_token: string
    }
    user: {
        email: string
        name: {
            firstName: string
            lastName: string
        }
    }
}
export type AppleFailureResponse = {
    error?: string
}
type Props = {
    onSuccess: (successResponse: { idToken: string }) => void
    onFailure: (failureResponse: AppleFailureResponse) => void
    renderedChildren: any
}
const AppleLoginWrapper = ({ onSuccess, onFailure, renderedChildren }: Props) => {
  return (
    <AppleLogin
      clientId={import.meta.env.VITE_APPLE_CLIENT!}
      redirectURI={import.meta.env.VITE_APPLE_REDIRECT!}
      responseMode={'query'}
      callback={(response) => {
        if ('authorization' in response) {
          const {
            authorization: { id_token }
          } = response as AppleSuccessResponse
          onSuccess({ idToken: id_token })
        } else {
          const { error } = response as AppleFailureResponse
          onFailure({ error: error === 'popup_closed_by_user' ? undefined : error })
        }
      }}
      render={(renderProps) => renderedChildren(renderProps) as ReactElement}
    />
  )
}

export default AppleLoginWrapper