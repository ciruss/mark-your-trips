import {
  ComposableMap, Geographies, Geography, Marker, ZoomableGroup,
} from 'react-simple-maps';
import { useState } from 'react';
import styled from 'styled-components';
import data from '../../data/ne_50m_admin_0_countries.json';
import peaks from '../../data/peaks.json';
import { Tooltip } from '../../components';
import { MarkerTooltip } from './components';

const StyledGeography = styled(Geography)<{ isActive: boolean }>`
  fill: #EAEAEC;
  stroke: #D6D6DA;

  ${({ isActive }) => isActive && `
    fill: #f2e396;
  `}
`;

const Container = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid black;
`;

export const Landing = () => {
  const [activeCountry, setActiveCountry] = useState('');

  const handleCountryClick = (geo: any) => {
    setActiveCountry(geo?.properties?.NAME);
  };

  return (
    <Container>
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={data}>
            {({ geographies }) => geographies.map((geo) => (
              <StyledGeography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCountryClick(geo)}
                isActive={geo?.properties?.NAME === activeCountry}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))}
          </Geographies>
          {peaks.map((peak) => {
            const [lat, long] = peak.latLong.split(', ');

            return (
              <Marker coordinates={[Number(long), Number(lat)]}>
                <Tooltip trigger={<circle r={1} fill="#F00" />}>
                  <MarkerTooltip peak={peak} />
                </Tooltip>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
    </Container>
  );
};
