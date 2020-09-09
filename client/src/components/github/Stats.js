import { Text, Box, } from 'grommet'

const Stats = () => {
  return (
    <>
    <Box>

    <Text margin={{"bottom": "xsmall"}}>
        Lines modified:<br />
        <Text color="green">+50000</Text>
        <Text color="red"> -20000</Text>
      </Text>
      <Text margin={{"bottom": "xsmall"}}>
        Issues closed: <Text color="green"> 8</Text>
      </Text>
      <Text margin={{"bottom": "xsmall"}}>Open date: 7/4/20</Text>
      <Text margin={{"bottom": "xsmall"}}>Close date: 8/27/20</Text>
    </Box>
    </>
  )
}

export default Stats