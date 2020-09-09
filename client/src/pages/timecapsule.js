import { Box, Heading, Image, Text, Grid, } from 'grommet';
import { Compass, History, FormClose, HelpOption } from 'grommet-icons'
import { GetMilestones } from '../data/githubClient'
import { Stats } from '../components/github/Stats'

const Introduction = () => {
  return (
    <>
      <Heading size="small">
        Time Capsule 
      </Heading>
      <Text margin={{ "bottom": "15px" }}>
        A time capsule is a historic cache of information or goods that is intended to be opened at a specific date. With this page, I take a new spin on the classic time capsule by providing a view into the previous version of this site.
      </Text>
      <Text margin={{ "bottom": "15px" }}>
        The work associated for this project can be found on the issue tracker over at GitHub. Releases are organized by milestones. I chose to name each milestone after a weather event, sorted alphabetically. Each previous version can be found on this page or at *.fitzpatrick.io where * is the milestone name.
      </Text>
      <Text margin={{ "bottom": "15px" }}>
        Creating this service is a work in progress. The current solution involves a DigitalOcean droplet running nginx that acts as a reverse proxy to individual NextJS servers each serving a static, prerendered React app. This will eventually need to be revised in the future due to resource limitations and risk of failure in the event of a server restart. But for now, it works!
      </Text>
    </>
  )
}

const TimeCapsuleList = (props) => {

  return (
    <>
      <Grid
        rows={['auto', 'auto']}
        columns={['small', 'auto']}
        gap="xsmall"
        areas={[
          { name: 'branch', start: [0, 0], end: [1, 0] },
          { name: 'stats', start: [0, 1], end: [0, 1] },
          { name: 'description', start: [1, 1], end: [1, 1] },
        ]}
        pad={{"bottom": "large"}}
      >
        <Box gridArea="branch" background="brand" pad="xsmall">
          <Text color="light-1" size="xlarge" weight="bold">
          Branch {props.currentRelease ? " - current release" : ""}
          </Text>
        </Box>
        <Box gridArea="stats" background="light-5" pad="xsmall">
          <Text color="black" margin={{"bottom": "xsmall"}}>
            Lines of code changed
          </Text>
          <Text color="black" margin={{"bottom": "xsmall"}}>
            Issues closed     
          </Text>
          <Text color="black" margin={{"bottom": "xsmall"}}>
            Open date - close date
          </Text>
        </Box>
        <Box gridArea="description" background="light-2" pad="xsmall">
          <Box>
            <Text>View previous site</Text>
          </Box>
          <br></br>
          <Text color="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat ullamcorper dolor, nec interdum mi lacinia quis. Etiam eu condimentum lorem. Donec et sollicitudin risus. 
          <br></br>
          <br></br>Duis efficitur purus eu justo fermentum semper. Suspendisse molestie tincidunt nunc, non blandit ante accumsan at. Vestibulum ullamcorper nisi ac lorem malesuada mollis. In efficitur dolor ut ligula imperdiet, eget semper ante pretium. Vestibulum posuere mauris at eros suscipit lacinia. Donec et pulvinar mi. Sed sed ligula est. Etiam iaculis metus quis porttitor posuere. Quisque eu felis sapien.
        </Text>

        </Box>
      </Grid>
    </>

  )
}

const TimeCapsule = () => {
  return (
    <>
      <Introduction />
      <TimeCapsuleList currentRelease={true}/>
      <TimeCapsuleList />
      <TimeCapsuleList />
      <TimeCapsuleList />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const milestones = await GetMilestones();
  console.log(milestones)
  return {
    props: { milestones }
  }
}

export default TimeCapsule
