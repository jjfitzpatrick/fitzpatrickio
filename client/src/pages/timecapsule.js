import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'grommet';
import { GetMilestones } from '../data/githubClient';
import TimeCapsuleEntry from '../components/timecapsule/TimeCapsuleEntry';

const Introduction = () => {
  return (
    <>
      <Heading size="small">Time Capsule</Heading>
      <Text margin={{ bottom: '15px' }}>
        A time capsule is a historic cache of information or goods that is
        intended to be opened at a specific date. With this page, I take a new
        spin on the classic time capsule by providing a view into the previous
        version of this site.
      </Text>
      <Text margin={{ bottom: '15px' }}>
        The work associated for this project can be found on the issue tracker
        over at GitHub. Releases are organized by milestones. I chose to name
        each milestone after a weather event, sorted alphabetically. Each
        previous version can be found on this page or at *.fitzpatrick.io where
        * is the milestone name.
      </Text>
      <Text margin={{ bottom: '15px' }}>
        Creating this service is a work in progress. The current solution
        involves a DigitalOcean droplet running nginx that acts as a reverse
        proxy to individual NextJS servers each serving a static, prerendered
        React app. This will eventually need to be revised in the future due to
        resource limitations and risk of failure in the event of a server
        restart. But for now, it works!
      </Text>
    </>
  );
};

const TimeCapsule = ({ milestones }) => {
  return (
    <>
      <Introduction />
      {milestones.data
        .sort((x, y) => {
          return x.title.localeCompare(y.title);
        })
        .map((x) => (
          <TimeCapsuleEntry key={x.id} currentRelease={true} milestone={x} />
        ))}
      {/* TODO: Map props.milestones.data 
          to TimeCapsultEntry */}
      {/* Order:
          1. current release
          2. prev releases
          3. future releases */}
    </>
  );
};

TimeCapsule.propTypes = {
  milestones: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.any),
  }),
};

export const getStaticProps = async () => {
  const milestones = await GetMilestones();
  // console.log(milestones);
  return {
    props: { milestones },
  };
};

export default TimeCapsule;
//
// GetMilestones
//
// "url":"https://api.github.com/repos/jjfitzpatrick/fitzpatrickio/milestones/2",
// "html_url":"https://github.com/jjfitzpatrick/fitzpatrickio/milestone/2",
// "labels_url":"https://api.github.com/repos/jjfitzpatrick/fitzpatrickio/milestones/2/labels",
// "id":5812567,
// "node_id":"MDk6TWlsZXN0b25lNTgxMjU2Nw==",
// "number":2,
// "title":"Blizzard",
// "description":"CMS, clean up, timeline",
// "creator":[
//   "Object"
// ],
// "open_issues":4,
// "closed_issues":16,
// "state":"open",
// "created_at":"2020-08-26T15:45:28Z",
// "updated_at":"2020-09-15T03:18:09Z",
// "due_on":null,
// "closed_at":null
