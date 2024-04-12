import Accordion from './Accordion'
import Alert from './Alert'
import Autocomplete from './Autocomplete'
import Avatar from './Avatar'
import Backdrop from './Backdrop'
import Badge from './Badge'
import Breadcrumbs from './Breadcrumbs'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Card from './Card'
import Checkbox from './Checkbox'
import Chip from './Chip'
import ControlLabel from './ControlLabel'
import CssBaseline from './CssBaseline'
import Dialog from './Dialog'
import Fab from './Fab'
import Input from './Input'
import Link from './Link'
import Lists from './List'
import LoadingButton from './LoadingButton'
import Menu from './Menu'
import Pagination from './Pagination'
import Paper from './Paper'
import Popover from './Popover'
import Progress from './Progress'
import Radio from './Radio'
import Rating from './Rating'
import Select from './Select'
import Skeleton from './Skeleton'
import Slider from './Slider'
import Stepper from './Stepper'
import SvgIcon from './SvgIcon'
import Switch from './Switch'
import Table from './Table'
import Tabs from './Tabs'
import Timeline from './Timeline'
import ToggleButton from './ToggleButton'
import Tooltip from './Tooltip'
import TreeView from './TreeView'

export default function ComponentsOverrides(theme: any) {
  const button = Button(theme)
  const select = Select(theme)
  const menu = Menu(theme)
  return { ...button, ...select, ...menu }
  return Object.assign(
    // Accordion(theme),
    // Alert(theme),
    // Autocomplete(theme),
    // Avatar(theme),
    // Backdrop(theme),
    // Badge(),
    // Breadcrumbs(theme),
    Button(theme),
    // ButtonGroup(theme),
    // Card(theme),
    Checkbox(theme),
    // Chip(theme),
    // ControlLabel(theme),
    // CssBaseline(),
    // Dialog(theme),
    // Fab(theme),
    // Input(theme),
    // Link(),
    // Lists(theme),
    // LoadingButton(),
    // Menu(theme),
    // Pagination(theme),
    // Paper(theme),
    // Popover(theme),
    // Progress(theme),
    // Radio(theme),
    // Rating(theme),
    // Select(),
    // Skeleton(theme),
    // Slider(theme),
    // Stepper(theme),
    // SvgIcon(),
    // Switch(theme),
    // Table(theme),
    // Tabs(theme),
    // Timeline(theme),
    // ToggleButton(theme),
    // Tooltip(theme),
    // TreeView(theme),
  )
}
