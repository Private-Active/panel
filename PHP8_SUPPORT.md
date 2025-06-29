# PHP 8.x Support Implementation

This document outlines the changes made to add support for PHP 8.0, 8.1, 8.2, 8.3, and 8.4 to the TinyCP Panel.

## Changes Applied

### 1. Updated PHP version list

The list of available PHP versions in `update/version` has been extended to include PHP 8.0 - 8.4:

```bash
php_list=php8.4 php8.3 php8.2 php8.1 php8.0 php7.4 php7.3 php7.2 php7.1 php7.0 php5.6
```

### 2. PHP Installation Logic Updates

The PHP installation functions in the following files have been updated to handle PHP 8.x specific requirements:

- `tinycp-ubuntu` - Main installation script
- `menu/controller/php/install_php2` - PHP secondary version installation
- `menu/controller/php/change_php1` - PHP primary version change

#### Key Changes:

1. **Version-specific package handling**:
   - PHP <8.0 includes json and xmlrpc extensions
   - PHP 8.0 includes xmlrpc but not json (as json is integrated into PHP core)
   - PHP ≥8.1 does not install xmlrpc by default (may need to be compiled)

2. **PHP Extension compatibility**:
   - Added compatibility with PHP 8.x for igbinary, memcached, and redis extensions
   - Added version detection to select appropriate extension versions for PHP 8.x
   - Adjusted compilation flags as needed for PHP 8.x

3. **Imagick Support**:
   - Added conditional installation of php-imagick based on PHP version 
   - Currently configured to install for PHP versions < 8.3 (may need to be adjusted as compatibility evolves)

### 3. Extension Configuration Updates

Updated the extension installation and configuration for:

- **igbinary**: Updated to use version 3.2.7 for PHP 8.2+
- **memcached**: Updated to use version 3.2.0 for PHP 8.2+
- **redis**: Updated to use version 5.3.7 for PHP 8.2+

### 4. Build and Configuration Parameters

Updated build parameters and configuration for PHP extensions to ensure compatibility with PHP 8.x syntax and requirements.

## Usage

The PHP version selection process remains the same, but now includes PHP 8.0 - 8.4 as options. All existing PHP management features work with the new versions.

## Notes

1. Compatibility with PHP 8.3 and 8.4 may require monitoring as these versions are newer and some extensions may require updates.

2. The imagick extension currently may not work properly with PHP 8.3 and 8.4. The code conditionally installs it for PHP versions up to 8.2.

3. All PHP management features including:
   - PHP restart
   - PHP settings configuration
   - Changing PHP versions
   - Process manager type
   - Open basedir settings
   - allow_url_fopen settings
   - Functions like proc_open/proc_close settings

   ...continue to work as before with the new PHP versions.

## Future Considerations

As PHP evolves, additional updates may be needed for:

1. New PHP extensions specific to PHP 8.x
2. Adjustments to PHP compile flags
3. Updates to extension compatibility for newer PHP versions
