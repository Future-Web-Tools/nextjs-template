
import uuid from '@lib/shared/uuid'
import { NONCE_TEMPLATE } from '@config/back'

const nonceMsgGen = () => `${NONCE_TEMPLATE.replace('_', uuid())}`

export default nonceMsgGen
