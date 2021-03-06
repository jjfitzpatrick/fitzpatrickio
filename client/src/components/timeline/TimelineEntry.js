import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Grid } from 'grommet';

const ConvertDate = (isoString) => {
  return new Date(isoString).toLocaleDateString('en-US');
};

const isReleased = (openIssues, closedIssues) => {
  if (openIssues === 0 && closedIssues > 0) return true;
  if (closedIssues === 0) return false;
  if (openIssues > 0) return false;

  return true;
};

const TimelineEntry = ({ milestone }) => {
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
          <Text textAlign="end">
            {isReleased(milestone.open_issues, milestone.closed_issues)
              ? 'Released'
              : ''}
          </Text>
        </Box>
        <Box gridArea="stats" background="light-5" pad="xsmall">
          <Box>
            <Text margin={{ bottom: 'xsmall' }}>
              Issues closed:{' '}
              <Text color="green">{milestone.closed_issues}</Text>
            </Text>
            <Text margin={{ bottom: 'xsmall' }}>
              Issues remaining: <Text color="red">{milestone.open_issues}</Text>
            </Text>
            <Text margin={{ bottom: 'xsmall' }}>
              Opened: {ConvertDate(milestone.created_at)}
            </Text>
            <Text margin={{ bottom: 'xsmall' }}>
              Closed: {ConvertDate(milestone.closed_at)}
            </Text>
          </Box>
        </Box>
        <Box gridArea="description" background="light-2" pad="xsmall">
          {milestone.description.split('\r\n').map((item, key) =>
             <Text color="black" key={key}>{item}<br/></Text>
          )}
        </Box>
      </Grid>
    </>
  );
};

TimelineEntry.propTypes = {
  milestone: PropTypes.object,
  currentRelease: PropTypes.bool,
};

export default TimelineEntry;
