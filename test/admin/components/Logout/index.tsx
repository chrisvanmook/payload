import React from 'react'

import { LogOut } from '../../../../packages/ui/src/icons/LogOut'
import { useConfig } from '../../../../packages/ui/src/providers/Config'

const Logout: React.FC = () => {
  const config = useConfig()
  const {
    admin: { logoutRoute },
    routes: { admin },
  } = config
  return (
    <a href={`${admin}${logoutRoute}#custom`}>
      <LogOut />
    </a>
  )
}

export default Logout
