'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      marginBottom={'0'}
    >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justifyContent={'center'}>
        <Flex flex={{ base: 2, md: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Flex
            direction={'column'}
          >
            <Text
                textAlign={useBreakpointValue({ base: 'left', md: 'left' })}
                fontFamily={'heading'}
                fontSize={{base : 'sm', md: 'xl'}}
                fontWeight={'bold'}
                color={useColorModeValue('gray.800', 'white')}>
                Surfactants in Solution (SIS)
            </Text>
            <Text
                textAlign={useBreakpointValue({ base: 'left', md: 'left' })}
                fontFamily={'heading'}
                color={useColorModeValue('gray.800', 'white')}
                fontSize={{base: '2xs', md: 'l'}}
                >
                24th International Symposium
            </Text>
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignItems={'center'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={{base: 'column', sm: 'row'}}
          spacing={1}
          >
          <Button
            as={'a'}
            display={{ base: 'inline-flex', md: 'inline-flex' }}
            fontSize={{base: 'xs', md: 'sm'}}
            size={{base: 'xs', md: 'md'}}
            fontWeight={600}
            color={'black'}
            bg={'#6AD4D7'}
            href={'/abstract_book.pdf'}
            _hover={{
              bg: 'orange.50',
              color: 'orange.400',
              border: '0.5px solid black',
              borderRadius : '5px'
            }}>
            Abstract Book
          </Button>
          <Button
            as={'a'}
            display={{ base: 'inline-flex', md: 'inline-flex' }}
            fontSize={{base: 'xs', md: 'sm'}}
            size={{base: 'xs', md: 'md'}}
            fontWeight={600}
            color={'black'}
            bg={'yellow.400'}
            href={'/sis_schedule.pdf'}
            target='_blank'
            rel='noopener noreferrer'
            _hover={{
              bg: 'orange.50',
              color: 'orange.400',
              border: '0.5px solid black',
              borderRadius : '5px'
            }}>
            Symposium Schedule
          </Button>
          <Button
            as={'a'}
            display={{ base: 'inline-flex', md: 'inline-flex' }}
            fontSize={{base: 'xs', md: 'sm'}}
            size={{base: 'xs', md: 'md'}}
            fontWeight={600}
            color={'white'}
            bg={'orange.400'}
            href={'/register'}
            isDisabled={true}
            _hover={{
              // bg: 'orange.50',
              // color: 'orange.400',
              // border: '0.5px solid black',
              // borderRadius : '5px'
            }}>
            Register Now
          </Button>
        </Stack>
        <Flex
          // flex={{ base: 1, md: 'auto' }}
          // ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <Flex
        direction={'row'}
      >
        <Text height={'2px'} backgroundColor={'orange.400'} width={'100%'}></Text>
        <Text height={'2px'} backgroundColor={'#6AD4D7'} width={'100%'}></Text>
        <Text height={'2px'} backgroundColor={'red.400'} width={'100%'}></Text>
      </Flex>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                  backgroundColor : 'rgba(0,0,0,0.2)'
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('orange.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'orange.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'orange.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: 'Home',
    href:'/',
  },
  {
    label: 'About',
    children: [
      {
        label: 'Symposium Overview',
        href: '/symposiumoverview',
      },
      {
        label: 'Symposium History',
        href: '/symposiumhistory',
      },
    ],
  },
  {
    label: '2024 Symposium',
    children: [
      {
        label: 'SIS 2024 Overview',
        href: '/overview',
      },
      {
        label: 'The Organizers',
        href: '/organizers',
      },
      {
        label: 'Venue',
        href: '/aboutlocation',
      },
      {
        label: 'Fees',
        href: '/fees',
      },
      {
        label: 'Sponsors',
        href: '/sponsors',
      },
      {
        label: 'Accommodation information',
        href: '/accoinfo',
      },
      {
        label: 'Abstract Submission',
        href: '/abssub',
      },
      {
        label: 'Organizing Committee',
        href: '/OrganisingCommittee',
      },
      {
        label: 'Scientific Program Committee',
        href: '/sac',
      },
      {
        label: 'International Advisory Committee',
        href: '/iac',
      },
      {
        label: 'List of Confirmed Speakers',
        href: '/Speakers',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]