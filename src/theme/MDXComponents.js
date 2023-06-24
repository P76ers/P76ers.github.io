// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ColorCode from '../components/ColorCode';
import ColorPalette from '../components/ColorPalette';
import VideoPlayer from '../components/VideoPlayer';
import InfoTooltip from '../components/InfoTooltip';
import PropsTable from '../components/PropsTable';
import ComponentsGrid from '../components/ComponentsGrid';
import { CardSection, Card } from '../components/CardComponents';
import { CardSectionInfo, CardInfo } from '../components/CardInfo';
import { CardSectionWarn, CardWarn } from '../components/CardWarn';
import { CardSectionDanger, CardDanger } from '../components/CardDanger';
import { CardChapter } from '../components/CardChapter';
import { CardHeading } from '../components/CardHeading';
import * as icons from '../icons';

/* Table */
import GlobalFilter from '../components/Table/GlobalFilter';
import ColumnFilter from '../components/Table/ColumnFilter';

import TableVsCodeGeneral from '../components/Table/vsCode/TableVsCodeGeneral';
import TableVsCodeBasicEditing from '../components/Table/vsCode/TableVsCodeBasicEditing';
import TableVsCodeNavigation from '../components/Table/vsCode/TableVsCodeNavigation';
import TableVsCodeSearchReplace from '../components/Table/vsCode/TableVsCodeSearchReplace';
import TableVsCodeMultiCursorSelection from '../components/Table/vsCode/TableVsCodeMultiCursorSelection';
import TableVsCodeRichLanguageEditing from '../components/Table/vsCode/TableVsCodeRichLanguageEditing';
import TableVsCodeEditorManagement from '../components/Table/vsCode/TableVsCodeEditorManagement';
import TableVsCodeFileManagement from '../components/Table/vsCode/TableVsCodeFileManagement';
import TableVsCodeDisplay from '../components/Table/vsCode/TableVsCodeDisplay';
import TableVsCodeDebug from '../components/Table/vsCode/TableVsCodeDebug';
import TableVsCodeIntegratedTerminal from '../components/Table/vsCode/TableVsCodeIntegratedTerminal';

import TableIntellijGeneral from '../components/Table/intelliJ/TableIntellijGeneral';
import TableIntellijBuild from '../components/Table/intelliJ/TableIntellijBuild';
import TableIntellijBasic from '../components/Table/intelliJ/TableIntellijBasic';
import TableIntellijCaret from '../components/Table/intelliJ/TableIntellijCaret';
import TableIntellijSelect from '../components/Table/intelliJ/TableIntellijSelect';
import TableIntellijCodeFolding from '../components/Table/intelliJ/TableIntellijCodeFolding';
import TableIntellijMultiple from '../components/Table/intelliJ/TableIntellijMultiple';
import TableIntellijCodeAssistance from '../components/Table/intelliJ/TableIntellijCodeAssistance';
import TableIntellijContext from '../components/Table/intelliJ/TableIntellijContext';
import TableIntellijFindEverything from '../components/Table/intelliJ/TableIntellijFindEverything';
import TableIntellijNavigate from '../components/Table/intelliJ/TableIntellijNavigate';
import TableIntellijCodeAnalysis from '../components/Table/intelliJ/TableIntellijCodeAnalysis';
import TableIntellijRunDebug from '../components/Table/intelliJ/TableIntellijRunDebug';
import TableIntellijRefactoring from '../components/Table/intelliJ/TableIntellijRefactoring';
import TableIntellijGlobalVcs from '../components/Table/intelliJ/TableIntellijGlobalVcs';
import TableIntellijDifferences from '../components/Table/intelliJ/TableIntellijDifferences';
import TableIntellijToolWindows from '../components/Table/intelliJ/TableIntellijToolWindows';

import TableWindowsEnvVariable from '../components/Table/windows/TableWindowsEnvVariable';
import TableWindowsPrograms from '../components/Table/windows/TableWindowsPrograms';
import TableWindowsShortcuts from '../components/Table/windows/TableWindowsShortcuts';
import TableWindowsCommands from '../components/Table/windows/TableWindowsCommands';
import TableWindowsShellCommands from '../components/Table/windows/TableWindowsShellCommands';

import TableNodeJsCommands from '../components/Table/nodejs/TableNodeJsCommands';
import TableNodeJsPackages from '../components/Table/nodejs/TableNodeJsPackages';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ...icons,

  Tabs,
  TabItem,

  color: ColorCode,
  ColorPalette,
  VideoPlayer,
  InfoTooltip,
  PropsTable,
  ComponentsGrid,
  CardSection,
  Card,
  CardSectionInfo,
  CardInfo,
  CardSectionWarn,
  CardWarn,
  CardSectionDanger,
  CardDanger,
  CardChapter,
  CardHeading,

  /* Table */
  GlobalFilter,
  ColumnFilter,

  TableVsCodeGeneral,
  TableVsCodeBasicEditing,
  TableVsCodeNavigation,
  TableVsCodeSearchReplace,
  TableVsCodeMultiCursorSelection,
  TableVsCodeRichLanguageEditing,
  TableVsCodeEditorManagement,
  TableVsCodeFileManagement,
  TableVsCodeDisplay,
  TableVsCodeDebug,
  TableVsCodeIntegratedTerminal,

  TableIntellijGeneral,
  TableIntellijBuild,
  TableIntellijBasic,
  TableIntellijCaret,
  TableIntellijSelect,
  TableIntellijCodeFolding,
  TableIntellijMultiple,
  TableIntellijCodeAssistance,
  TableIntellijContext,
  TableIntellijFindEverything,
  TableIntellijNavigate,
  TableIntellijCodeAnalysis,
  TableIntellijRunDebug,
  TableIntellijRefactoring,
  TableIntellijGlobalVcs,
  TableIntellijDifferences,
  TableIntellijToolWindows,

  TableWindowsEnvVariable,
  TableWindowsPrograms,
  TableWindowsShortcuts,
  TableWindowsCommands,
  TableWindowsShellCommands,

  TableNodeJsCommands,
  TableNodeJsPackages,
};
