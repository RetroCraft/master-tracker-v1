
D.E0: theorist gateway
======================

During the Merch Mystery hunt, the domain `http://thetheoristgateway.com <http://thetheoristgateway.com/>`_ was used as a final step of that ARG. Returning to the URL as of 09/16 gives a static page with &lt;title&gt; "hellointernet" and a &lt;meta&gt; description of "return on the date which is hidden".

The content of the page is made up of an image `fefefe.png <http://thetheoristgateway.com/fefefe.png>`_ (762x762 pixels) and some JavaScript tracking code (\ **which will have no bearing on the ARG as it is just standard boilerplate!**\ ).

The image is a message written in Montserrat Light with a l33t-style steganographic cipher. By taking each substituted letter, the numeric string ``524742323534`` is discovered. This, when fed through an ASCII hex conversion, results in ``RGB254``. The RGB color (254, 254, 254) is one pixel darker than pure white (which is three 255's).The filename, FEFEFE, is also standard hexadecimal for the same RGB color. Filtering for that color in the white background reveals a timestamp (literally, it uses a stamped typewriter-style font) for 9.29.2018 at 00:00:01 PST (one second after midnight). Accessing the EXIF data of the file will show that it was created in Photoshop.

At the timestamp, the website updated. It is now a black background, with the following image on it, called ``patienceisthekey6974736a75737461636c6f636b6775797372656c6178.gif``. The numbers are an ASCII hex representation of “itsjustaclockguysrelax”.

The minutes counter also flashes in a semi-regular fashion, two blips followed by one blip. This could represent Morse ``..-`` for "IT" or “U”. The blips take place when on frames 1, 3, 7, and 11.


.. image:: https://lh6.googleusercontent.com/qZmRCpCClF9engUT7R0_QHwyPIKcdwnUmWj8mFwWybwMZJFZmgeO-1HOY7OxW5nIzXL8JmzoOQFh3C0UHu85ERNoC7RAqkttLbxLg7_TaJKImr2iQpiBEBrfJAwDj78x3jQbykaM
   :target: https://lh6.googleusercontent.com/qZmRCpCClF9engUT7R0_QHwyPIKcdwnUmWj8mFwWybwMZJFZmgeO-1HOY7OxW5nIzXL8JmzoOQFh3C0UHu85ERNoC7RAqkttLbxLg7_TaJKImr2iQpiBEBrfJAwDj78x3jQbykaM
   :alt: 


A frame by frame analysis revealed these numbers, separated into frames:


#. 9 3 2 0
#. 5 0 7 1
#. 5/1 4 6/7 4
#. 8 2 2 5/4
#. 0 8/7 1 3
#. 6 5 3 6
#. 1 2 4 5
#. 9/1 8/2 7 6/5
#. 8 7 6 5
#. 4 3 2 1
#. 0/4 0/3 0/2 0/1

The following is a compilation of the eleven frames (left-to-right, top-to-bottom):


.. image:: https://lh5.googleusercontent.com/Gt60TsLbW7lLjtnML2oyYezBb_mXSYPaicWrCSv7Y5Qr0EqWBNvc1PQ1-4Fp5lMYTU_nCVXzsBCKhzhiwMNrohwYD0EoprLohT3uitbXI7iLKFQsYBCC8l8GhseIniFj9OKx6swa
   :target: https://lh5.googleusercontent.com/Gt60TsLbW7lLjtnML2oyYezBb_mXSYPaicWrCSv7Y5Qr0EqWBNvc1PQ1-4Fp5lMYTU_nCVXzsBCKhzhiwMNrohwYD0EoprLohT3uitbXI7iLKFQsYBCC8l8GhseIniFj9OKx6swa
   :alt: 

.. image:: https://lh5.googleusercontent.com/N2w0WDdNjiNSDdsyuJTDQ3DDEftGbKep_fkUGZPaOchdlIgoF9p8d6N_LqEoqi04f5CjNIc-Enfd8PXYEWYu3RF3fbwE_jUcSF8Zupqnx8Xa7Lbx4l9Oy0cnF4d9BfMQlPEIKH7C
   :target: https://lh5.googleusercontent.com/N2w0WDdNjiNSDdsyuJTDQ3DDEftGbKep_fkUGZPaOchdlIgoF9p8d6N_LqEoqi04f5CjNIc-Enfd8PXYEWYu3RF3fbwE_jUcSF8Zupqnx8Xa7Lbx4l9Oy0cnF4d9BfMQlPEIKH7C
   :alt: 

.. image:: https://lh3.googleusercontent.com/fUqqJXxaZBxsy4Lb_-yLKAs-OkL0vduZKZSuWSzbMKlgAC1QLEoTE9ZnePsqn8SHe_F_HkLb_3EkVLrgVEEsd_ymo2_glzmRH6BEH6WGs-Map4LM2WngrF8uaKe3K4GKocUU__gc
   :target: https://lh3.googleusercontent.com/fUqqJXxaZBxsy4Lb_-yLKAs-OkL0vduZKZSuWSzbMKlgAC1QLEoTE9ZnePsqn8SHe_F_HkLb_3EkVLrgVEEsd_ymo2_glzmRH6BEH6WGs-Map4LM2WngrF8uaKe3K4GKocUU__gc
   :alt: 

.. image:: https://lh6.googleusercontent.com/9Ok-0yFDWuZbyHCtfCp1SDT-VecGRkPzIUJezYNHpgZUARNc4X3vGCe7AilFm1uzNECh3xGNuctBhHJaof0_EnI38SLZrGY7Ja38s-bIbjROIyk147UFgPOUk7EelQQqK9qCMO5J
   :target: https://lh6.googleusercontent.com/9Ok-0yFDWuZbyHCtfCp1SDT-VecGRkPzIUJezYNHpgZUARNc4X3vGCe7AilFm1uzNECh3xGNuctBhHJaof0_EnI38SLZrGY7Ja38s-bIbjROIyk147UFgPOUk7EelQQqK9qCMO5J
   :alt: 

.. image:: https://lh6.googleusercontent.com/xHF404iVHmlEkZcUz674YRx4iULYuxtlmrKbmXZt0hxQYfOou21i2mfiknpXsWQtg_Oi0CUPm5-HaxKwasAlpSlbZtj1IKgPI_Rr6fwFNYDq1WjItT_KaWZvDmFeC79ewlfRCCWK
   :target: https://lh6.googleusercontent.com/xHF404iVHmlEkZcUz674YRx4iULYuxtlmrKbmXZt0hxQYfOou21i2mfiknpXsWQtg_Oi0CUPm5-HaxKwasAlpSlbZtj1IKgPI_Rr6fwFNYDq1WjItT_KaWZvDmFeC79ewlfRCCWK
   :alt: 

.. image:: https://lh5.googleusercontent.com/O9_SAky6A4tteFvyL4ZSDdiXyQ7XR7IG6GInNgoCHlG58AEMGK3DbRFx_XBZPLXM-sb52qVrut4spQpScPD1ZZ35-9fDzmdKcX6YZEvYhGveHcgVqLEtnyPOcyt2iWIqpEWk3zWV
   :target: https://lh5.googleusercontent.com/O9_SAky6A4tteFvyL4ZSDdiXyQ7XR7IG6GInNgoCHlG58AEMGK3DbRFx_XBZPLXM-sb52qVrut4spQpScPD1ZZ35-9fDzmdKcX6YZEvYhGveHcgVqLEtnyPOcyt2iWIqpEWk3zWV
   :alt: 

.. image:: https://lh6.googleusercontent.com/QA1NP9yQuTdtItOox6IaD_q7LBklfA-KS6_qjxBUx-GQKj6Czz0sKDXki5GMyCwmnLqcNI5KnasaG89XhdzMUsRR1OYEFkbQpBh09XzkeE01i4J_GkYm5YyU2h1irjXT1SEzvI0U
   :target: https://lh6.googleusercontent.com/QA1NP9yQuTdtItOox6IaD_q7LBklfA-KS6_qjxBUx-GQKj6Czz0sKDXki5GMyCwmnLqcNI5KnasaG89XhdzMUsRR1OYEFkbQpBh09XzkeE01i4J_GkYm5YyU2h1irjXT1SEzvI0U
   :alt: 

.. image:: https://lh5.googleusercontent.com/djG3N2TQW2PyH4oZUEpZSijcMVlaVZqCKyQ0YP5naff0Zbcnbavr6ljOAZEVPIrid81VRh1WHvCG2nLm-gI9fyC9Tynt4BkX6o1rthQpEzREDusE0M1g_OztwaCQKbOBa-BLMRoh
   :target: https://lh5.googleusercontent.com/djG3N2TQW2PyH4oZUEpZSijcMVlaVZqCKyQ0YP5naff0Zbcnbavr6ljOAZEVPIrid81VRh1WHvCG2nLm-gI9fyC9Tynt4BkX6o1rthQpEzREDusE0M1g_OztwaCQKbOBa-BLMRoh
   :alt: 

.. image:: https://lh5.googleusercontent.com/1DSikKgCrtcXm6y6JJY-yJhYA1V0iSimcOp5cZ5wovIXSVHVnw4-Iycpb4ioC9gZBbJhLJAlv4BuuNTqx9wX3uCK_C_PiK-ywbZlgwtd3jJnACsA63P7n4vDo0stBCFdYDTjHV3E
   :target: https://lh5.googleusercontent.com/1DSikKgCrtcXm6y6JJY-yJhYA1V0iSimcOp5cZ5wovIXSVHVnw4-Iycpb4ioC9gZBbJhLJAlv4BuuNTqx9wX3uCK_C_PiK-ywbZlgwtd3jJnACsA63P7n4vDo0stBCFdYDTjHV3E
   :alt: 

.. image:: https://lh3.googleusercontent.com/PfcCN5H1jrQKgKCMnbl1VQ5YPFpENTUErt15kg9-qxdraPkrPy_W1IUcuzvTkPAjUNxhg-FeZxyLr7mMvyBtow7S-4u2YQ06E3TvUTBqn0Eyc0tPjGzQH3jgT-DjVllzqMbhNJLx
   :target: https://lh3.googleusercontent.com/PfcCN5H1jrQKgKCMnbl1VQ5YPFpENTUErt15kg9-qxdraPkrPy_W1IUcuzvTkPAjUNxhg-FeZxyLr7mMvyBtow7S-4u2YQ06E3TvUTBqn0Eyc0tPjGzQH3jgT-DjVllzqMbhNJLx
   :alt: 

.. image:: https://lh4.googleusercontent.com/fwll_mwFFmfESHBm5_oscRj1Z54-D5n8KqnCo_rGEI0nxYalE-ze0wixXZFII1ZQBS3RmT2NfRBPSqlyHmr_fNXMXqLbPM15ABLKBhcRfGz9T5Memb9W2ugtzSZzzeAvVLw7f0tq
   :target: https://lh4.googleusercontent.com/fwll_mwFFmfESHBm5_oscRj1Z54-D5n8KqnCo_rGEI0nxYalE-ze0wixXZFII1ZQBS3RmT2NfRBPSqlyHmr_fNXMXqLbPM15ABLKBhcRfGz9T5Memb9W2ugtzSZzzeAvVLw7f0tq
   :alt: 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
