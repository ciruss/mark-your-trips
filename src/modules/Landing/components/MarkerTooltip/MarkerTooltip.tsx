import { IPeak } from '../../../../types/peaks';

type Props = {
  peak: IPeak;
};

export const MarkerTooltip = ({ peak }: Props) => (
  <div>
    <h3>{peak.peakName}</h3>
    <p>
      {peak.elevation}
      m
    </p>
    <p>{peak.country}</p>
    <p>
      Cordinates:
      {' '}
      {peak.latLong}
    </p>
  </div>
);
