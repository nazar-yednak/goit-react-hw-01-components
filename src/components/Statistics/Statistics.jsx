import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
  Title,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>Upload stats</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
