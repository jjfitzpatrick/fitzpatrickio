import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'grommet';
import { GetMilestones } from '../data/githubClient';
import TimelineEntry from '../components/timeline/TimelineEntry';

const Introduction = () => {
  return (
    <>
      <Heading size="small">Timeline</Heading>
      <Text margin={{ bottom: '15px' }}>
        A timeline is a brief, information dense, ordered list of events. This page 
        aims to provide a timeline of the releases made for this site with various 
        stats and release notes attached.
      </Text>
      <Text margin={{ bottom: '15px' }}>
        The work associated for this project can be found on 
        the <a href="https://github.com/jjfitzpatrick/fitzpatrickio/issues?q=is%3Aissue">issue tracker</a>.  
        The code is available at <a href="https://github.com/jjfitzpatrick/fitzpatrickio">this GitHub repository</a>. 
        Releases are organized by milestones. I chose to name each milestone after a unique 
        weather event, sorted alphabetically.
      </Text>
      <Text margin={{ bottom: '15px' }}>
        A future feature of this page will allow visitors to view previous releases 
        of the site to see how it has evolved and improved over time!
      </Text>
    </>
  );
};

const Timeline = ({ milestones }) => {
  return (
    <>
      <Introduction />
      {milestones.data
        .sort((x, y) => {
          return x.title.localeCompare(y.title);
        })
        .map((x) => (
          <TimelineEntry key={x.id} milestone={x} />
        ))}
    </>
  );
};

Timeline.propTypes = {
  milestones: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.any),
  }),
};

export const getStaticProps = async () => {
  const milestones = await GetMilestones();
  return {
    props: { milestones },
  };
};

export default Timeline;

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
