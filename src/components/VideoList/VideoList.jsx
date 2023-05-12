import { VideoItem } from './VideoList.styled';

export const VideoList = ({ videos, onSelect }) => {
    return (
      <ul>
        {videos.map(video => (
          <VideoItem key={video.id} onClick={() => onSelect(video.link)}>
            {video.link}
          </VideoItem>
        ))}
      </ul>
    );
  };