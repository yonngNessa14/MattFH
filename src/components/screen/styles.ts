import { StyleSheet } from 'react-native'
import { color } from '@theme'

export default StyleSheet.create({
  container: {
    backgroundColor: color.background,
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: '7.5%',
  },
  containerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  headerContainer: {
    width: '100%',
    marginBottom: 10,
  },
})
