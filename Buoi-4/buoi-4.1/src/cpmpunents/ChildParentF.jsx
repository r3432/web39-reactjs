import React from 'react'
import PropTypes from 'prop-types'

const ChildParentF = ({a}) => {
  return (
    <div>
      {a}
    </div>
  )
}

ChildParentF.propTypes = {
a:PropTypes.number
}

export default ChildParentF
