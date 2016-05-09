import '/imports/startup/server/index';
import '/imports/startup/server/collectionManagers/chat';
import '/imports/startup/server/collectionManagers/cursor';
import '/imports/startup/server/collectionManagers/meetings';
import '/imports/startup/server/collectionManagers/poll';
import '/imports/startup/server/collectionManagers/presentations';
import '/imports/startup/server/collectionManagers/shapes';
import '/imports/startup/server/collectionManagers/slides';
import '/imports/api/users/server/usersManager';
import '/imports/startup/server/meteorMethods/deletePrivateChatMessages';
import '/imports/startup/server/meteorMethods/kickUser';
import '/imports/startup/server/meteorMethods/listenOnlyRequestToggle';
import '/imports/startup/server/meteorMethods/muteUser';
import '/imports/startup/server/meteorMethods/publishSwitchToNextSlideMessage';
import '/imports/startup/server/meteorMethods/publishSwitchToPreviousSlideMessage';
import '/imports/startup/server/meteorMethods/publishVoteMessage';
import '/imports/startup/server/meteorMethods/sendChatMessagetoServer';
import '/imports/startup/server/meteorMethods/setUserPresenter';
import '/imports/startup/server/meteorMethods/unmuteUser';
import '/imports/startup/server/meteorMethods/userLogout';
import '/imports/startup/server/meteorMethods/userSetEmoji';
import '/imports/startup/server/meteorMethods/validateAuthToken';
import '/imports/startup/server/EventQueue';
import '/imports/startup/server/helpers';
import '/imports/startup/server/logger';
import '/imports/startup/server/publish';
import '/imports/startup/server/eventHandlers';
import '/imports/startup/server/RedisPubSub';
import '/imports/startup/server/userPermissions';
