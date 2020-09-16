import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Grid } from 'grommet';

const TimeCapsuleEntry = ({ currentRelease, milestone }) => {
  // const shit = new Octokit.IssuesListMilestonesResponseData(fuck);

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
        pad={{ bottom: 'large' }}
      >
        <Box
          gridArea="branch"
          background="brand"
          pad="xsmall"
          justify="between"
          align="center"
          direction="row"
        >
          <Text textAlign="start" color="light-1" size="xlarge" weight="bold">
            {milestone.title}
          </Text>
          <Text textAlign="end">{currentRelease ? 'Current release' : ''}</Text>
        </Box>
        <Box gridArea="stats" background="light-5" pad="xsmall">
          <Box>
            <Text margin={{ bottom: 'xsmall' }}>
              Lines modified:
              <br />
              <Text color="green">+1</Text>
              <Text color="red"> -2</Text>
            </Text>
            <Text margin={{ bottom: 'xsmall' }}>
              Issues closed: <Text color="green"> 8</Text>
            </Text>
            <Text margin={{ bottom: 'xsmall' }}>Open date: 7/4/20</Text>
            <Text margin={{ bottom: 'xsmall' }}>Close date: 8/27/20</Text>
          </Box>
        </Box>
        <Box gridArea="description" background="light-2" pad="xsmall">
          <Box>
            <Text>View previous site</Text>
          </Box>
          <br></br>
          <Text color="black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat ullamcorper dolor, nec interdum mi lacinia quis. Etiam eu
            condimentum lorem. Donec et sollicitudin risus.
          </Text>
        </Box>
      </Grid>
    </>
  );
};

TimeCapsuleEntry.propTypes = {
  milestone: PropTypes.object,
  currentRelease: PropTypes.bool,
};

export default TimeCapsuleEntry;
