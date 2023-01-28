import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  // to use these hooks, we need to import them from Chakra UI
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        // otherways the button will be behind the drawer
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={0}
        w={10}
        h={10}
        borderRadius={'full'}
        // when the button is clicked, the onOpen function will be called
        onClick={onOpen}
      >
        <BiMenuAltLeft />
      </Button>

      <Drawer placement={'left'} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          {/* X button to close the drawer, calls onClose */}
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            {/* basically display flex, v means verticall, elements will align vetically */}
            <VStack alignItems={'flex-start'}>
              {/* clicking this button will close the drawer */}
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            {/* Hstack for Buttons in row */}
            <HStack
              pos={'absolute'}
              left={0}
              bottom={10}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
