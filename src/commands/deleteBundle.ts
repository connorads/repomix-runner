import * as vscode from 'vscode';
import { Bundle } from '../core/bundles/types.js';
import { BundleManager } from '../core/bundles/bundleManager.js';
import { showTempNotification } from '../shared/showTempNotification.js';

export async function deleteBundle(bundleManager: BundleManager, bundle: Bundle) {
  const confirm = await vscode.window.showWarningMessage(
    `Are you sure you want to delete bundle "${bundle.name}"?`,
    'Yes',
    'No'
  );

  if (confirm !== 'Yes') {
    return;
  }

  await bundleManager.deleteBundle(bundle.name);
  showTempNotification(`Bundle "${bundle.name}" deleted successfully`);
}
