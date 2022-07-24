import React from 'react';
import PropTypes from "prop-types";
import {
  StatisticsSection, Title, StatList, StatItem,
StatLabel, StatPercentage } from './Statistics.styled'


export function Statistics( {title, stats}) {
    return (
<StatisticsSection >
  <Title >{title}</Title>
            <StatList >
                {stats.map(stat => (
                    <StatItem 
                        key={stat.id}>
                        <StatLabel >{stat.label}</StatLabel>
                        <StatPercentage >{stat.percentage}%</StatPercentage>
                    </StatItem>))}  
  </StatList>
</StatisticsSection>
    )
    
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

Statistics.defaultProps = {
  title: '',
};